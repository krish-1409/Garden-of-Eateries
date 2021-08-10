import styled from 'styled-components'
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} from './components/headerComponent.js'
import {RecipeContainer,RecipeListContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText} from './components/recipeComponent.js'
import {useState} from 'react';
import axios from 'axios';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';


const Container = styled.div`
display: flex;
flex-direction: column;
`;

const RecipeComponent = (props) =>{
  //console.log(props);
  const { recipeObj } = props;
  const [show, setShow] = useState(false);
  return(
    <>
    <Dialog open={show}>
    <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
    <DialogContent>
      <table>
        <thead>
    <th>Ingredients</th>
    <th>Weight</th>
        </thead>
        <tbody>
          {recipeObj.ingredients.map((ingredientObj)=>(
          <tr>
            <td>{ingredientObj.text}</td>
            <td>{ingredientObj.weight}</td>
          </tr>))}
        </tbody>
      </table>
    </DialogContent>
    <DialogActions>
          <IngredientsText onClick={()=>window.open(recipeObj.url)}>See More</IngredientsText>
          <SeeMoreText onClick={()=>setShow(false)}>Close</SeeMoreText>
    </DialogActions>
    </Dialog>
    <RecipeContainer>
      <CoverImage src={recipeObj.image}/>
      <RecipeName>{recipeObj.label}</RecipeName>
      <IngredientsText onClick={()=>setShow(true)}>Ingredients</IngredientsText>
      <SeeMoreText onClick={()=>window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
    </RecipeContainer>
    </>
  );
};

const Placeholder = styled.img`
height:100px;
width:100px;
margin: 220px;
opacity:50%;
`;
const Axios = require('axios');
const App_ID = "838a4650";
const App_key ="e85fb79264fdb453978849e49f226e15";

function App() {
  const[timeoutId, updateTimeoutId] = useState()
  const[recipeList, updateRecipeList] = useState([])
  

  const fetchRecipe = async(searchString) => {
    const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${App_ID}&app_key=${App_key}`);
    console.log(response);
    updateRecipeList(response.data.hits);
  };

  const onTextchange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(()=>fetchRecipe(event.target.value),1000);
    updateTimeoutId(timeout)
    
  
  };


  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="/hamburger.svg"/>
          Garden of Eateries
          </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg"/>
          <SearchInput placeholder="Search Recipe" onChange={onTextchange}/>
        </SearchComponent>
        </Header>

        <RecipeListContainer>

          { recipeList.length ? recipeList.map((recipeObj)=> <RecipeComponent recipeObj={recipeObj.recipe}/>):<Placeholder src="hamburger.svg"/>}

          
        </RecipeListContainer>
      </Container>
  );
}

export default App;
