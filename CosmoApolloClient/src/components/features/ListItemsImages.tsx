import { ResponseData } from '../../assets/types/response';
import { ErrorImages } from '../shared/ErrorImages';
import { CosmoImage, ListItemImage } from './ListItemImage';

const ListItemsImages = ({data, error} : ResponseData) => {

    if (error) return <ErrorImages error={error} />;

    return (
        <div>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        data?.getImages.map((image: CosmoImage) => (
                            <ListItemImage imageUrl={image.imageUrl} createdAt={image.createdAt} />
                        ))
                    }
                </div>
            </section>
        </div>
    );
}

export default ListItemsImages;
