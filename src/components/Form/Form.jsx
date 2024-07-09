import data from '../../utils/constants/provinces';
import {
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
  } from "./Form.styled"
function Form() {
  const { provinces } = data;

  return (
    <FormContainer>
      <FormSection>
        <ImageForm>
          <FormImage src="../../src/assets/undraw_analysis_dq08.svg" alt="" />
        </ImageForm>
        <AddSection>
          <FormTitle>Form Covid</FormTitle>
          <form>
            <FormLabel>Provinsi</FormLabel>
            <FormSelect>
              {provinces.map((item) => (
                <option key={item.kota} value={item.kota}>
                  {item.kota}
                </option>
              ))}
            </FormSelect>
            <FormLabel>Kasus</FormLabel>
            <FormInput type="number" placeholder="masukkan total kasus!" />
            <FormLabel>Sembuh</FormLabel>
            <FormInput type="number" placeholder="masukkan total sembuh!" />
            <FormLabel>Dirawat</FormLabel>
            <FormInput type="number" placeholder="masukkan total dirawat!" />
            <FormLabel>Meninggal</FormLabel>
            <FormInput type="number" placeholder="masukkan total meninggal!" />
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </AddSection>
      </FormSection>
    </FormContainer>
  );
}

export default Form;
