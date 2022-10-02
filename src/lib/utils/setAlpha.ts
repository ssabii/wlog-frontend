import Color from "color";

const setAlpha = (color: string, alpha: number) =>
  Color(color).alpha(alpha).toString();

export default setAlpha;
