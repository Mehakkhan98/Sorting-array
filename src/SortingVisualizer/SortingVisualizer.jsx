import React from 'react';
import './SortingVisualizer.css';
import {mergedsort} from '../SortingAlogrithms/SortingAlgo';
import {bubble_Sort} from '../SortingAlogrithms/BubbleSort';
import { heapSort}from '../SortingAlogrithms/Heapsort';
import {quick_Sort} from '../SortingAlogrithms/Quicksort';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
export default class SortingVisualizer extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            array:[],
            value:''
        }
    }
    componentDidMount()
    {
       this.resetArray();
    }
  
   resetArray=()=>{
     const newArray=[];
     for(let i=0;i<50;i++)
     {
         newArray.push(randomIntFromInterval(5,500))
     }
     this.setState({array:newArray})
    }
    
    Mergesort=()=>{
    const animations=mergedsort(this.state.array)
     this.setState({array:animations})
    
    }
    heapsort(){
        const Sorteddata=heapSort(this.state.array)
           console.log("data",Sorteddata)
        this.setState({array:Sorteddata})


      

    
}
    bubblesort(){
        const data= bubble_Sort(this.state.array)
        this.setState({array:data})
    }
    quicksort(){
        const data= quick_Sort(this.state.array)
        this.setState({array:data})
    }
    render()
    {
    const {array}=this.state

        return(
            <div>
            <div className="array-container">
            {
                array.map((value,ind)=>(
               <div className="array-bar" key={ind} style={{height:`${value}px`,width:`${this.state.value}px`}}>
                 {this.state.value>=18?value:null}
               </div>
                )

                )
            }
            
            </div>
            <div style={{position:'absolute',left:100,width:'80%',top:5}}>
           
            <button style={{backgroundColor:'purple',marginleft:10,borderRadius:10,height:40,width:120 }}onClick={()=>this.resetArray()}>Reset array</button>
            <button style={{backgroundColor:'pink',marginleft:20,borderRadius:10,height:40,width:80  }}onClick={()=>this.Mergesort()}>Mergesort</button>
            <button style={{backgroundColor:'blue',marginleft:20,borderRadius:10 ,height:40,width:80, }}onClick={()=>this.bubblesort()}>BubbleSort</button>
            <button style={{backgroundColor:'green',marginleft:20,borderRadius:10 ,height:40,width:80 }}onClick={()=>this.heapsort()}>HeapSort</button>
           
            <button style={{backgroundColor:'yellow',marginleft:20,borderRadius:10 ,height:40,width:80 }}onClick={()=>this.quicksort()}>QuickSort</button>
            <RangeSlider
      value={this.state.value}
      disabled={false}
      min={5}
      max={20}
      onChange={changeEvent => this.setState({value:changeEvent.target.value})}   />
            </div>
            </div>
        )
    }
}
function randomIntFromInterval(min,max)
{
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
}