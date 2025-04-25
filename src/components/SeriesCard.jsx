// import styles from "./NetflixSeries";
// // import "..components/Netflix.css"
// import styled from "styled-components"
// import "../components/Netflix.module.css"


// export const SeriesCard = ({data}) =>{
//     // console.log(props);
//     const {id, cast, genre, description, img_url, name, rating, watch_url} = data;
    
//     //First make object and pass it in
//     const btn_style = {
//             padding: "1.2rem 2.4rem",
//             border: "none",
//             fontSize: "1.6rem",
//             backgroundColor: `${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
//             color: "var(--btn-color)",
//             cursor: "pointer",
//             fontWeight: "bold"
//     }
//     //L-21 -> make styled component and use

//     const ButtonStyled = styled.button(
//         {
//             padding: "1.2rem 2.4rem",
//             border: "none",
//             fontSize: "1.6rem",
//             backgroundColor: `${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
//             color: "var(--btn-color)",
//             cursor: "pointer",
//             fontWeight: "bold"
//         }
//     )

//     //Make styled component using template literals
//     //Pure Css
//     const ButtonStyledLit = styled.button`
//             padding: 1.2rem 2.4rem;
//             border: none;
//             font-size: 1.6rem;
//             background-color: ${(props)=>
//                 props.rating>=8.5 ? "#7dcea0" : "#f7dc6f"
//             };
//             color: var(--btn-color);
//             cursor: pointer;
//             font-weight: bold;
    
//     `;

//     const Rating = styled.h3`
//         font-size: 1.6rem;
//         color: "#7dcea0";
//         text-transform: capitalize;
//     `
// const ratingColor = (rating>=8.5 ? styles.super_hit : styles.average );
// //css module, classname as object
// // function ratingColor(){  
// //     if(rating>=8.5) return "super_hit"
// //     else return "average"
// //     } 

//     return(

//         <li className={styles.card}>
 
//             <div>
//                 <img src={img_url} 
//                 alt={name}  
//                 width='40%'/>
//             </div>

//         {/* <div className={styles["card-content"]}> */}
//         <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem  ]">
//             <h2>Name : {name}</h2>
//             <Rating>Rating : 
//                 <span className={` ${styles.rating} ${ratingColor}`}>          {/*Passing object in className */}
//                     {rating}
//                     </span>
//             </Rating>
//          {/* <h3>Rating : {10-0.8}</h3> */}
//             <p className="text-3xl font-bold underline text-cyan-800">Summary : {description}</p>
//             <p>Genre : {genre.join(', ') }</p>
//             <p>Cast : {cast.join(', ')}</p>
//          {/* <button>{age>=18 ? "Watch Now" : "Not Available"}</button> */}
//          {/* <button>{canWatch }</button> */}
//             <a href={watch_url} target='_blank'>
//            {/* <button style={btn_style}>Watch Now</button> }      { /**Inline css, passing object */}
//             {/*<ButtonStyled>Watch Now</ButtonStyled>}              { /**Styled component pass and use, curly braces*/}
//             <ButtonStyledLit rating={rating}>Watch Now</ButtonStyledLit>
//             </a>
//         </div>

//         </li>
//         )
// }

import styles from "./Netflix.module.css";
import styled from "styled-components";

const ButtonStyledLit = styled.button`
  padding: 1.2rem 2.4rem;
  border: none;
  font-size: 1.6rem;
  background-color: ${(props) =>
    props.$rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
  color: var(--btn-color);
  cursor: pointer;
  font-weight: bold;
`;

const Rating = styled.h3`
  font-size: 1.6rem;
  color: #000000;
  text-transform: capitalize;
`;

export const SeriesCard = ({ data }) => {
  const { id, cast, genre, description, img_url, name, rating, watch_url } = data;

  const ratingColor = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={`${styles.card}` }>
      <div>
        <img src={img_url} alt={name} width="40%" />
      </div>

      <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
        <h2>Name : {name}</h2>
        <Rating>
          Rating :
          <span className={`${styles.rating} ${ratingColor}`}>
            {rating}
          </span>
        </Rating>
        <p className="text-3xl font-bold underline text-cyan-800">
          Summary : {description}
        </p>
        <p>Genre : {genre.join(", ")}</p>
        <p>Cast : {cast.join(", ")}</p>
        <a href={watch_url} target="_blank" rel="noreferrer">
          <ButtonStyledLit $rating={rating}>Watch Now</ButtonStyledLit>
        </a>
      </div>
    </li>
  );
};




// style={{marginBottom : "2.2rem"}}
//l-14, Destructuring of data, 
//M-1, const {data} = props
// <img src = { data.img_url}/>

//M-2
// export const SeriesCard = (props)
// const {id, cast, genre, description, img_url,name,rating,watch_url} = props.data;
{/* <img src={ img_url}/> */}

//m_3 
// export const SeriesCard = ({data}) => {
// const {id, cast, genre, description, img_url,name,rating,watch_url} = data;
// }

// export const SeriesCard = ({data}) =>{
//     return(

//         <li key={data}>

//         <div>
//             <img src={ img_url} 
//             alt={  name}  
//             width='40%'/>
//         </div>

//         <h2>Name : {  name}</h2>
//         <h3>Rating : {  rating}</h3>
//         {/* <h3>Rating : {10-0.8}</h3> */}
//         <p>Summary : {  description}</p>
//         <p>Genre : {   genre }</p>
//         <p>Cast : {   cast}</p>
//         {/* <button>{age>=18 ? "Watch Now" : "Not Available"}</button> */}
//         {/* <button>{canWatch }</button> */}
//         <a href={   watch_url} target='_blank'>
//         <button>Watch Now</button>
//         </a>

//         </li>
//         )
// }