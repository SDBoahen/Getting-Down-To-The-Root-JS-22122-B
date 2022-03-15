




// import cardComponent from "./components/cardComponent.js"







function renderH1(){

    console.log("-------- In renderH1 --------")  //

    const h1ToAppend = document.createElement( "h1" )
        h1ToAppend.textContent = " '' It’s on the page, that’s all that matters '' "

    return( h1ToAppend )

}
function renderIMG(){

    console.log("-------- In renderIMG --------")  //
    const imageToAppend = document.createElement( "img" )
        imageToAppend.src = "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"

    return( imageToAppend )
}

// General Function Keyword
function cardComponent( props ){

    //// js

            console.log("-------- In cardComponent --------")  // 

            const divForCard = document.createElement( "div" )
                console.log( "divForCard: " , divForCard )  //

                divForCard.innerHTML = `
                
                    <h2>================</h2>
                        <h2>${props.name}</h2>
                        <img src=${props.image_URL} />
                        <p>Favorite Color: ${props.favColor}</p>
                    <h2>================</h2>

                `

    //// js

    //// more html like

        return( divForCard  )

    //// more html like 

}

// Arrow Function
const cardComponentArrow =( props )=>{

    //// js

    console.log("-------- In cardComponent --------")  // 

    const divForCard = document.createElement( "div" )
        console.log( "divForCard: " , divForCard )  //

        divForCard.innerHTML = `
        
            <h2>================</h2>
                <h2>${props.name}</h2>
                <img src=${props.image_URL} />
                <p>Favorite Color: ${props.favColor}</p>
            <h2>================</h2>

        `

    //// js

    //// more html like

        return( divForCard  )

    //// more html like 

} 


// Pretty Much What React + Bable is Doing

    function ReactDOMRender( FunctionToReturnHTMLtoAppend ){

        const divToAppendEverythingTo = document.querySelector( "#root" ) 
            
            // console.log( "divToAppendEverythingTo: " , divToAppendEverythingTo )  //

            const endResultOfFunctionToReturnHTMLtoAppend = FunctionToReturnHTMLtoAppend()

        divToAppendEverythingTo.append( endResultOfFunctionToReturnHTMLtoAppend )

    }

// Handling, "Getting Stuff To The DOM / Slap-it-on-the-DOM"
ReactDOMRender(  <App />  )





const johanness = { 
    name: "Johanness", 
    image_URL: "https://ca.slack-edge.com/T02MD9XTF-U02VDLE7DK2-29a602b19bd8-512",
    favColor: "Yellow" 
} 
ReactDOMRender(  function(){ return cardComponent( johanness ) }  )

const sam = { 
    name: "Sam",
    image_URL: "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-38321cb359b0-512",
    favColor: "Gold" 
} 
ReactDOMRender(  function(){ return cardComponent( sam ) }  )

const felix = { 
    name: "felix", 
    image_URL: "https://ca.slack-edge.com/T02MD9XTF-U02TQKU62M9-caea4ead6ec7-512",
    favColor: "Green" 
} 
ReactDOMRender(  () => cardComponentArrow( felix )  )

const kenya = { 
    name: "Kenya", 
    image_URL: "https://static.skillshare.com/cdn-cgi/image/quality=85,width=1242,height=839,format=auto/uploads/project/37610/cover_1242_c456656684accbbc66ddc0b09978df9e.jpg",
    favColor: "Pink" 
} 
ReactDOMRender(  () => cardComponentArrow( kenya )  )












// renderLikeReact(  function( ){  return cardComponent( "Sam" , "Gold" ) }  )
// renderLikeReact(  () => cardComponent( "Johannes" , "Yellow" )  )

// renderLikeReact(  

//     function( ){  
//         return cardComponent( "Sam" ) 
//     }  

// )











// const h2ToAppend = document.createElement( "h1" )
// h2ToAppend.textContent = " if only you could write out a function in css that just says '' do what I want '' "




// function cardComponentFirstExample( ){

//     //// js

//             console.log("-------- In cardComponent --------")  // 


//             const divForCard = document.createElement( "div" )
//                 console.log( "divForCard: " , divForCard )  //

//                 divForCard.innerHTML = `
                
//                     <h2>================</h2>
//                         <h2>Sam</h2>
//                         <img src="https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-38321cb359b0-512" />
//                         <p>Favorite Color: Gold</p>
//                     <h2>================</h2>

//                 `

//         // const divForCard = document.createElement( "div" )
//         //     console.log( "divForCard: " , divForCard )  //

//         //     const h2ForTopOfCard = document.createElement( "h2" )
//         //     h2ForTopOfCard.textContent = "================"

//         //     const h2ForName = document.createElement( "h2" )
//         //         h2ForName.textContent = "Name: Sam"

//         //     const imageForCard = document.createElement( "img" )
//         //         imageForCard.src = "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-38321cb359b0-512"

        
//         //     const pTagForCard = document.createElement( "p" )
//         //         pTagForCard.textContent = "Favorite Color: Gold"

//         //     const h2ForBottomOfCard = document.createElement( "h2" )
//         //         h2ForBottomOfCard.textContent = "================"

//         // divForCard.append( 
//         //     h2ForTopOfCard,
//         //         h2ForName,
//         //         imageForCard,
//         //         pTagForCard,
//         //     h2ForBottomOfCard

//         // )

//     //// js

//     //// more html like

//         return( divForCard  )

//     //// more html like 

// }
// cardComponentFirstExample()