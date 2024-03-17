interface UtilProps {
    icon: React.ElementType;
    name: string;
    color: string;
    id: string;
  }

export default function Util(props: UtilProps) {
    const{ icon: Icon, name, color, id } = props
  return (
    <div id={id} className="util_tab">
    <Icon style={{color:color}}  />
      <p id="util_text" className="social_text">{name}</p>
    </div>
  )
}
