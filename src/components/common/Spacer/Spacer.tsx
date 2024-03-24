import { SpacerProps } from "./spacer.types";

export default function Spacer({space = '10px'}: SpacerProps) {
  return <div style={{ visibility: 'hidden', height: space  }} />;
}
