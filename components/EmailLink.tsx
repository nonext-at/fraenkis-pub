import { decodeEmail } from "../utils/decodeEmail";
import { useEffect, useState } from "react";

const EmailLink = () => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const decodedEmail = decodeEmail();
    setEmail(decodedEmail);
  }, []);

  if (!email) {
    return <noscript><a href="contact-form.html">info@fränkis.at</a></noscript>;
  }

  return <a href={`mailto:${email}`}>info@fränkis.at</a>;
};

export default EmailLink;
