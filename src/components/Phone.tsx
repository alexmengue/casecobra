import { cn } from "@/lib/utils";

const Phone = ({className}: {}) => {
  return (<div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}></div>)
}

export default Phone;