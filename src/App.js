import styled from 'styled-components'
import {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} from './components/headerComponent.js'
import {RecipeContainer,RecipeListContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText} from './components/recipeComponent.js'
import {useState} from 'react';

const Container = styled.div`
display: flex;
flex-direction: column;
`;



function App() {
  const[timeoutId, updateTimeoutId] = useState()

  const onTextchange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(()=>console.log('API call'),1000);
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

          <RecipeContainer>
          <CoverImage src="/hamburger.svg"/>
          <RecipeName>Matar Paneer</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Reciepe</SeeMoreText>
          </RecipeContainer>

          <RecipeContainer>
          <CoverImage src="/hamburger.svg"/>
          <RecipeName>Matar Paneer</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Reciepe</SeeMoreText>
          </RecipeContainer>

          <RecipeContainer>
          <CoverImage src="/hamburger.svg"/>
          <RecipeName>Matar Paneer</RecipeName>
          <IngredientsText>Ingredients</IngredientsText>
          <SeeMoreText>See Complete Reciepe</SeeMoreText>
          </RecipeContainer>

          
        </RecipeListContainer>
      </Container>
  );
}

export default App;
