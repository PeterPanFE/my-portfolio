import { my_global_info } from "../../constants";
import { styles } from "../../styles";
import { ContactFormData } from "./types";

export const EMAILJS_KEYS = {
  serviceId: 'service_p86c3m6',
  templateId: 'template_8stz6ki',
  publicKey: 'aV4XQPOTeSP8fPs-Y'
}

export const CONTACT_FORM_DEFAULT_VALUES: ContactFormData = {
  name: '',
  email: '',
  message: '',
}

export const CONTACT_FORM_LABELS = {
  name: {
    label: 'name_label',
    placeholder: "name_placeholder",
  },
  email: {
    label: 'email_label',
    placeholder: "email_placeholder",
  },
  message: {
    label: 'message_label',
    placeholder: "message_placeholder",
  }
}

export const CONTACT_CONTAINER_CLASSES = 'xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
export const CONTACT_CONTAINER_MOTION_CLASSES = 'flex-[0.75] bg-black-100 p-8 rounded-2xl'
export const CONTACT_SUBTEXT_CLASSES = styles.sectionSubText
export const CONTACT_HEADTEXT_CLASSES = styles.sectionHeadText
export const CONTACT_FORM_CLASSES = 'mt-12 flex flex-col gap-8'
export const CONTACT_FORM_FIELD_WRAPPER_CLASSES = 'flex flex-col'
export const CONTACT_FORM_LABEL_CLASSES = 'text-white font-medium mb-4'
export const CONTACT_FORM_INPUT_CLASSES = 'bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
export const SEND_BUTTON_CLASSES = 'bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'

export const EARTH_CONTAINER_MOTION_CLASSES = 'xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'