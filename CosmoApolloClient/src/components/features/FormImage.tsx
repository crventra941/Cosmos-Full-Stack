import Ajv, { ErrorObject } from 'ajv';
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState, SyntheticEvent} from "react";
import { Input } from '../shared/Input';
import { ImagePreview } from "./ImagePreview";
import { FormData, imageSchema } from "../../assets/validation/validationSchema";
import { Button } from '../shared/Button';
import { GET_IMAGES } from '../../pages/images';

const ajv = new Ajv();

const formState = {
    height: 0,
    width: 0,
    isGrayScale: false,
    isYoung: false,
}

const CREATE_IMAGE = gql`
    mutation CreateImage($height: Int, $width: Int, $isGrayScale: Boolean, $isYoung: Boolean) {
        createImage(height: $height, width:$width, isGrayScale: $isGrayScale, isYoung: $isYoung) {
            imageUrl
        }
    }
`;

export const FormImage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(formState);
    const { height, width, isGrayScale, isYoung } = formData;

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = (data: FormData): boolean => {
        const validate = ajv.compile(imageSchema);
        const valid = validate(data);

        if (!valid && validate.errors) {
          const errorMessages = validate.errors.reduce((acc: Record<string, string>, error: ErrorObject) => {
            if (error.instancePath && error.message) {
              const key = error.instancePath.substring(1); // Remove the leading "/"
              acc[key] = error.message;
            }
            return acc;
          }, {});
          setErrors(errorMessages);
          return false;
        }
        setErrors({});
        return true;
      };
    
    const [isSubmited, setSubmited] = useState(false);
    const [createImage, { data, loading, error}] = useMutation(CREATE_IMAGE);

    useEffect(() => {
        setSubmited(false);
    }, []);
    
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setSubmited(true);

        const formState:FormData = {
            height: +height,
            width: +width,
            isGrayScale: typeof(isGrayScale) !== 'boolean' && isGrayScale && JSON.parse(isGrayScale),
            isYoung: typeof(isYoung) !== 'boolean' &&  isYoung && JSON.parse(isYoung),
        }

        if(validate(formState)) {
            // Send to GraphQL API
            createImage({
                variables: formState,
                refetchQueries: [GET_IMAGES, "GetImages"],
            }
        );
        }
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckBoxEvent = (e: React.ChangeEvent<HTMLInputElement>)=> {
        e.target.value = `${e.target.checked}`;
        onInputChange(e);
    }

  return (
    <div className="flex">
        <div className="w-1/2">
            <form onSubmit={handleSubmit}>
                <div className='py-2'>
                    <Input 
                        id='height' 
                        name='height' 
                        type='range'
                        value={height}
                        min={10}
                        errorMessage={errors.height}
                        onChange={onInputChange}
                        isSubmited={isSubmited}
                        step={10}
                        label={`Image Height: ${height}`}
                    />
                </div>

                <div className='py-2'>
                    <Input 
                        id='width' 
                        name='width' 
                        type='range'
                        value={width}
                        min={10}
                        step={10}
                        errorMessage={errors.width || ''}
                        onChange={onInputChange}
                        isSubmited={isSubmited}
                        label={`Image Width: ${width}`}
                    />
                </div>

                <div className='py-2'>
                    <Input 
                        id='isGrayScale' 
                        name='isGrayScale' 
                        type="checkbox"
                        errorMessage={errors.isGrayScale || ''}
                        onChange={handleCheckBoxEvent}
                        isSubmited={isSubmited}
                        label='Gray Scale'
                    />
                </div>

                <div className='py-2'>
                    <Input 
                        id='isYoung' 
                        name='isYoung' 
                        type="checkbox"
                        errorMessage={errors.isYoung || ''}
                        onChange={handleCheckBoxEvent}
                        isSubmited={isSubmited}
                        label='Young'
                    />
                </div>
                <Button label='Submit and generate' type="submit"/>
            </form>
        </div>
        <div className="w-1/2">
            <ImagePreview data={data} loading={loading} error={error}/>
        </div>
    </div>
  )
}
