import React , {Component} from 'react';
  
export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state={
            currentIndex:0,
            images:[
                '/images/Image_01.png',
                '/images/Image_02.png',
                '/images/Image_03.png'
            ]
        }
    }

    // componentDidMount() {
    //     this.interval = setInterval(this.nextSlide, 3000);
    //   }
    
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    //   }

    nextSlide =()=>{
        console.log("called");
        const {currentIndex, images} = this.state;
        this.setState({
            currentIndex: currentIndex === images.length -1 ? 0 : currentIndex + 1
            // currentIndex: (currentIndex + 1) % 3
        })
    }
    prevSlide =()=>{
        const {currentIndex, images} = this.state;
        this.setState({
            currentIndex: currentIndex === 0 ? images.length - 1 : currentIndex - 1,
        })
    }

    render(){
        const{currentIndex, images} = this.state;
        console.log("currIndex",currentIndex);
        return(
            <div style={{width:"100%",height:"500px",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto",marginTop:0,position:"relative"}}>
                <button style={{position:"absolute",zIndex:1,left:0,
                    border: 0,
                    outline: 0,
                    cursor: "pointer",
                    color: "white",
                    backgroundColor: "black",
                    boxShadow: "rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(84 105 212) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "4px 8px",
                    display: "inline-block",
                    minHeight: "28px",             
                }} onClick={this.prevSlide}>&#10094;</button>
                <img style={{height:"100%",width:"100%"}} src={images[currentIndex]} alt="slider"/>
                <button style={{position:"absolute",zIndex:1,right:0,
                    border: 0,
                    outline: 0,
                    cursor: "pointer",
                    color: "white",
                    backgroundColor: "black",
                    boxShadow: "rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, #76b4f1 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "4px 8px",
                    display: "inline-block",
                    minHeight: "28px",             
                }} onClick={this.prevSlide}>&#10095;</button>
            </div>
        )
    }
}

    // async componentDidUpdate(prevProps, prevState) {
    //     console.log("called12");
    //     if (prevState.currentIndex !== this.state.currentIndex) {
    //       console.log(this.state.currentIndex,"this.state.currentIndex")
    //     }
    //   }