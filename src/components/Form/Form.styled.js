import styled from "styled-components";

const FormContainer = styled.div`
  margin: 1rem;

  @media (min-width: 768px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const FormSection = styled.section`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin: 0 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
  }
`;

const ImageForm = styled.div`
  @media (min-width: 768px) {
    flex-basis: 50%;
    height: auto;
    margin: 0 4rem;
  }
`;

const FormImage = styled.img`
  margin-top: 5rem;
  border-radius: 10px;
  max-width: 100%;
`;

const AddSection = styled.div`
  text-align: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-basis: 50%;
    margin: 0 4rem;
  }
`;

const FormTitle = styled.h2`
  color: rgb(68, 68, 251);
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.7rem;
  text-align: justify;
  padding: 0 0.5rem;
`;

const FormSelect = styled.select`
  margin-bottom: 1rem;
  border: 2px solid #7c7c7c;
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  text-align: justify;
`;

const FormInput = styled.input`
  margin-bottom: 1rem;
  border: 2px solid #7c7c7c;
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  text-align: justify;
`;

const SubmitButton = styled.button`
  display: block;
  border: none;
  background-color: rgb(68, 68, 251);
  color: #fff;
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  text-align: center;
`;

export {
  FormContainer,
  FormImage,
  FormInput,
  FormLabel,
  FormSection,
  FormSelect,
  FormTitle,
  AddSection,
  SubmitButton,
  ImageForm
}