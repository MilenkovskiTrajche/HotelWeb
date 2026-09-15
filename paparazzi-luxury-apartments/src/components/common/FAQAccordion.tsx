import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "./Icon";

const keys = ["checkIn","checkOut","parking","wifi","self","towels","air","heating","fridge","sirok","clock","reservation"] as const;

export function FAQAccordion() {
  const {t}=useTranslation(); const [open,setOpen]=useState<string|null>(null);
  return <div className="faq-list">{keys.map(k=><div className="faq-item" key={k}><button className="faq-question" aria-expanded={open===k} onClick={()=>setOpen(open===k?null:k)}><span>{t(`faq.${k}`)}</span><Icon name="chevron" size={18}/></button>{open===k&&<div className="faq-answer"><p>{t("faq.todo")}</p></div>}</div>)}</div>;
}