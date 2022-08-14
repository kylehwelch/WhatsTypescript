interface iword {
    readonly word: string;
    readonly definition: string;
}

class wordDTO implements iword {
    word: string;
    definition: string;
}