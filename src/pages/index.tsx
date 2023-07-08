import useAppRoutes from '@/hooks/useAppRoutes';
import { useRouter } from 'next/router';
import MetaData from '@/app/MetaData';
import { PROJECT_TITLE } from '@/config';
import HomePage from './HomePage';


const Page = () => {
  const router = useRouter();
  // const { HomePage} = useAppRoutes();
  return (
<div>
<MetaData title={`${PROJECT_TITLE}`} description='' />
 <HomePage/>
  
</div>
  )
}
export default Page;