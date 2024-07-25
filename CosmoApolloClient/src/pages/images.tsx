import React, { Suspense } from 'react';
import { MainLayout } from '../components'
import { gql, useQuery } from "@apollo/client";

const ListItemsImages = React.lazy(() => import('../components/features/ListItemsImages'));

export const GET_IMAGES = gql`
  query GetImages {
    getImages {
      imageUrl
      createdAt
    }
  }
`;

export const ImagesPage: React.FC = () => {
  const { error, data } = useQuery(GET_IMAGES);

  return (
    <MainLayout>
      <div className="px-6 pt-6">
          <Suspense fallback={<div>Loading...</div>}>
            <ListItemsImages error={error} data={data} />
          </Suspense>
      </div>
  </MainLayout>
  )
}
