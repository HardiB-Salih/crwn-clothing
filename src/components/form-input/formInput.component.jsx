import styled from "styled-components";

const FormInput = (props) => {
  const { lable, type, onChange, name, value } = props;
  return (
    <Group>
      <Input
        placeholder={lable}
        type={type}
        required
        onChange={onChange}
        name={name}
        value={value}
      />
    </Group>
  );
};

export default FormInput;

const Group = styled.div``;
const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px 20px;
  background-blend-mode: overlay;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(250, 250, 250, 0.4);

  :focus {
    outline: none;
  }
`;
