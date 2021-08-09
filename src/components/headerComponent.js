import styled from 'styled-components'

export const Header = styled.div`
color:white;
background-color:black;
display:flex;
flex-direction:row;
alin-items:center;
justify-content: space-between;
padding:15px;
font-size:22px;
box-shadow:0 3px 6px 0 #555;
`;
export const AppNameComponent = styled.div`
display:flex;
align-items:center;
`;
export const AppIcon = styled.img`
width:34px;
height:34px;
margin: 15px;
`;
export const SearchComponent = styled.div`
display:flex;
flex-direction:row;
background-color:white;
padding:15px;
border-radius:6px;
width:50%;
height:20%;
`;
export const SearchIcon = styled.img`
width:32px;
height:32px;
`; 
export const SearchInput = styled.input`
border:none;
outline:none;
margin-left:15px;
font-size: 16px;
fontweight:bold;
`;