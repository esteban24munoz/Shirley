import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  transition: all 0.2s ease-in;
  padding: 20px;
  color: ${(props) => (props.variant === "outline" ? "white" : "black")};
  cursor: pointer;
  font-size: 18px;
  border-radius: 0.5em;
  background: ${(props) => (props.variant === "outline" ? "black" : "4caf50")};
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  /* USE HOVER  */
  &:hover {
    color: ${(props) => (props.variant === "outline" ? "white" : "black")};

    background: ${(props) =>
      props.variant === "outline" ? "black" : "4caf50"};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:active{
    background-color: ${(props) => 
       props.variant === "outline" ? "black" : "4caf50"};
        transform: translateY(2px);
  }
`