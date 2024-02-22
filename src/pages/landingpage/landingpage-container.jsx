import LandingPageScreen from "./landingpage-screen";

const LandingPageContainer = ()=>{
    const cardDetails = [
        {
          rank: "#1",
          gdpEnd: "GDP at the end of 1964",
          amount: "23445 ",
          Image:"https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
          name :"Dhruv J.",
          color:"#FFE072C9"
        },
        {
          rank: "#2",
          gdpEnd: "GDP at the end of 1964",
          amount: "23445 ",
          Image:"https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
          name :"Sakshi P.",
          color:"#D1D1D1"
    
    
        },
        {
          rank: "#3",
          gdpEnd: "GDP at the end of 1964",
          amount: "23445 ",
          Image:"https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
          name:"Arjun K.",
          color:"#F1BF9B"
    
    
    
        },
        {
          rank: "#4",
          gdpEnd: "GDP at the end of 1964",
          amount: "23445 ",
          Image:"https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
          name:"Jay P.",
          color:"#F2F2F2"
    
    
        },
        {
          rank: "#5",
          gdpEnd: "GDP at the end of 1964",
          amount: "23445",
          Image:"https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
          name:"Jay P.",
          color:"#F2F2F2"
    
    
        },
      ];
    return(
        <LandingPageScreen cardDetails={cardDetails}/>
    )
}

export default LandingPageContainer