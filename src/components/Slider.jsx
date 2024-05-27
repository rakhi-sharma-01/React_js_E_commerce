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

    async componentDidUpdate(prevProps, prevState) {
        console.log("called12");
        if (prevState.currentIndex !== this.state.currentIndex) {
          console.log(this.state.currentIndex,"this.state.currentIndex")
        }
      }
    nextSlide =()=>{
        console.log("called");
        // const {currentIndex, images} = this.state;
        this.setState = ({
            currentIndex: (currentIndex + 1) % 3
        })
    }
    prevSlide =()=>{
        const {currentIndex, images} = this.state;
        this.setState = ({
            currentIndex: currentIndex === 0 ? images.length - 1 : currentIndex - 1,
        })
    }

    render(){
        const{currentIndex, images} = this.state;
        console.log("currIndex",currentIndex);
        return(
            <div style={{width:"90%",height:"500px",display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}>
                <button onClick={this.prevSlide}>Back </button>
                <img style={{height:"100%",width:"100%"}} src={images[currentIndex]} alt="slider"/>
                <button onClick={this.nextSlide}>Next</button>

            </div>
        )
    }
}