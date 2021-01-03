import {Component} from 'react'
import APIURL from '../../helpers/environment';

type Products = {
  products: { //this is really an array of objects; needs to be changed
    id: number;
    productName: string;
    category: string;
    subCategory: string;
    description: string;
    size: string;
    sku: number;
  },
  message: string;
}

class Home extends Component<{}, Products>{
  constructor(props: any){
    super(props);
    this.state={
      products: {
        id: 0,
        productName: 'clothing',
        category: '',
        subCategory: '',
        description: '',
        size: '',
        sku: 0
      },
      message: ''
    }
  }

  componentDidMount(){
    fetch(`${APIURL}/products/inventory`)
    .then(res => res.json())
    .then(data => {
      //console.log(data.products)
      data.products.map((occurance: any) => console.log(occurance))
    })
  }

  render(){
    return(
      <div>
        Home
        <h1>Home</h1>
        <h2>{this.state.products.productName}</h2>
      </div>
    )
  }
}

export default Home;