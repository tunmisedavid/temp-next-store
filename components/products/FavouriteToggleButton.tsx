import {FaHeart} from 'react-icons/fa';
import { Button } from '../ui/button';
import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavouriteId } from '@/utils/actions';
import FavouriteToggleForm from './FavouriteToggleForm';

const FavouriteToggleButton = async({productId}: {productId:string}) => {
  const {userId} = auth();
  if(!userId) return <CardSignInButton />
  const favoriteId = await fetchFavouriteId({productId})
  return (
  <Button size='icon' variant='outline' className='p-2 cursor-pointer' >
    {/* <FaHeart /> */}
    <FavouriteToggleForm favoriteId={favoriteId} productId={productId} />
  </Button>
  )
}

export default FavouriteToggleButton
