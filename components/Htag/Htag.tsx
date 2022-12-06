import {HtagProps} from "./Htag.props";


export const Htag = ({tag, children}: HtagProps): JSX.Element => {
    return (
        <h1>{children}</h1>
    )
}