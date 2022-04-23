import React from 'react';
import { useRouter } from 'next/router';

const single_product = () => {
    const router = useRouter();
    const { pid } = router.query;

  return (
      <div>{pid}</div>
  )
}

export default single_product