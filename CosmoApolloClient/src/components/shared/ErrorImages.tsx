import { ApolloError } from '@apollo/client';
import { CiImageOff } from 'react-icons/ci';

export const ErrorImages = ({ error }: { error : ApolloError}) => {
  return (
    <div className="flex flex-col items-center p-2 text-red-500 w-[80%] pt-16">
        <h1 className="text-3xl">Error getting images </h1>
        <CiImageOff className="text-red-500 " size={90}/>
        <small className="text-center">
        {JSON.stringify(error)}
        </small>
  </div>
  )
}
