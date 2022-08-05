import { Padding } from '../partials/Units';
import { useWindowResizeHandler } from '../hooks/useWindowResizeHandler';

export default function Footer() {
  const pageWidth = useWindowResizeHandler();
  return (
    <div className="bg-dark ">
      <Padding padding={pageWidth >= 768 ? '3vh' : '3vh 1vh'}></Padding>
    </div>
  );
}
