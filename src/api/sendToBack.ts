import { CustomFormType } from "../components/CustomForm";


type SendToBackProps = CustomFormType

const sendToBack = async (sendProps: SendToBackProps) => {

    console.log({...sendProps, phone: sendProps.phone.replace(/[^+\d]/g, "")});
    

    return Math.random() > 0.5
}


export default sendToBack