export default function PagesNavbar({nav_style,select_style}) {
  return (
    <ul style={nav_style}>
      <li>
        <select style={select_style} name="navbar_select" id="">
          <option style={{backgroundColor:"#272727", paddingInline:"1vh", fontSize:"18px",}} value="buy">BUY</option>
          <option style={{backgroundColor:"#272727", fontSize:"18px",}} value="buy_category1">Category number one </option>
          <option style={{backgroundColor:"#272727", fontSize:"18px",}} value="buy_apartments">Apartments in Dubai</option>
          <option style={{backgroundColor:"#272727", fontSize:"18px",}} value="buy_category25">Category number twenty five</option>
        </select>
      </li>
      <li>BLOG</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
    </ul>
  );
}
