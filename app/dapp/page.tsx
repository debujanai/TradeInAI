// /app/dapp/my-page.tsx

import DappLayout from './layout';
import Trending from './trending';
import Form from './form';

export default function MyDappPage() {
  return (
    
    <DappLayout>
   
    <Trending/>
    <Form/>
    </DappLayout>
  );
}
