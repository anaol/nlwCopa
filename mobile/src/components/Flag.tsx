import { Image, IImageProps } from "native-base";

export function Flag({ ...otherProps }: IImageProps) {
    return <Image {...otherProps} alt="Bandeira" w={8} h={6} mx={3} />;
}
