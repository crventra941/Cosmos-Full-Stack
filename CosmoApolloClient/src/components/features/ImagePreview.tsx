import { CiImageOn } from "react-icons/ci";
import { ResponseData } from "../../assets/types/response";
import { ErrorImages } from "../shared/ErrorImages";


export const ImagePreview = ({ data, loading, error}: ResponseData) => {

  if(error) return <ErrorImages error={error}/>

  if(!data || loading) return <CiImageOn size={500} />

  return (
    data &&
      <div className="w-full max-w-sm mx-auto">
        <img src={data.createImage.imageUrl} className="w-full h-auto"></img>
      </div>
  )
}
