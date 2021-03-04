import {ColorScheme} from "@/interfaces/ColorScheme";

// lightmode instance of ColorScheme interface
export class Lightmode implements ColorScheme {
    background: string = 'white';
    textColor: string = 'black';
    cardColor: string = 'white';
    inputColor: string = 'white';
    buttonColor: string = '#007bff';
}
