interface SocialProps {
  icon: React.ElementType;
  name: string;
  link: string;
  color: string;
}

export default function Social(props: SocialProps) {
  const { icon: Icon, name, link, color } = props;

  return (
    <div className="social_tab">
      <Icon style={{color:color}}  />
      <p className="social_text">{name}</p>
      <a href={link} className="follow_button">Follow</a>
    </div>
  );
}
