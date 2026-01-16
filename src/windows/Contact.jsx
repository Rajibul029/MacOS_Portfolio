import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";
const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="p-5 space-y-5 ">
        <img src="/images/adrian.png" alt="Rajibul" className="w-25 rounded-full mx-auto" />
        <h3>Let's Connect :</h3>
        <p>Feel free to reach out to me via email or through my social media profiles below <br/>Email Me:- 
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rajibulislam62963@gmail.com&su=Hello%20Rajibul&body=I%20want%20to%20contact%20you">
          rajibulislam62963@gmail.com
        </a></p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow