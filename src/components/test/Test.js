
import { useContext, useEffect } from 'react';
import { dataContext } from '../../context/context'
function Test() {
  const localDataContext = useContext(dataContext)
  useEffect(() => {
    console.log('dsadasasd');
    console.log(localDataContext);
  })


  return (<>
    {/* <Page5 /> */}
  </>)
}
export default Test;
