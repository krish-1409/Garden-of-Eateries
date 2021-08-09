import styled from "styled-components";

export const RecipeListContainer = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
gap: 20px;
`;

export const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding:10px;
width:275px;
box-shadow: 0 3px 10px 0 #aaa;

`;

export const CoverImage = styled.img`
height: 200px;
`;

export const RecipeName = styled.span`
font-size:18px;
font-weight:bold;
color:black;
margin:10px 0;
`;

export const IngredientsText = styled.span`
font-size:18px;
border: solid 1px green;
color:green;
margin-bottom:12px;
cursor:pointer;
padding:5px 10px;
border-radius:4px;
text-align:center;
`;

export const SeeMoreText = styled(IngredientsText)`
color: #eb3300;
border: solid 1px #eb3300;
`;
