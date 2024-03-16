interface SocialProps {
  icon: React.ElementType;
  name: string;
  link: string;
  color: string;
  text: string;
}

export default function Social(props: SocialProps) {
  const { icon: Icon, name, link, color, text } = props;
  var newtext : string = ''
  if (text === '' || null) {
    newtext = 'Follow'
  }
  else{
    newtext = text
  }

  return (
    <div className="social_tab">
      <Icon style={{color:color}}  />
      <p className="social_text">{name}</p>
      <a href={link} className="follow_button">{newtext}</a>
    </div>
  );
}
