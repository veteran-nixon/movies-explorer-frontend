function NavTab(props) {
  return (
    <a className={props.className} href={props.href} target={props.target}>{props.text}</a>
  )
}

export default NavTab;
