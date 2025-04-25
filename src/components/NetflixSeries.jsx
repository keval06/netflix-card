import seriesData from '../api/seriesData.json'
import { SeriesCard } from './SeriesCard'
// import "..components/NetflixSeries"

const NetflixSeries = () => {
    return (
      <div className="flex flex-col items-center mt-12 ">
        <h1 className="text-4xl font-bold text-center mt-10 mb-12">
          Best Netflix Series
        </h1>
  
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-12">
          {seriesData.map((curElem) => (
            <SeriesCard key={curElem.id} data={curElem} />
          ))}
        </ul>
      </div>
    );
  };

export default NetflixSeries;

export const Footer = () => {
    return <p>I am Footer</p>
}
export const Header = () => {
    return <p>I am Header</p>
}