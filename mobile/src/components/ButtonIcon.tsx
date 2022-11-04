import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { IconProps } from "phosphor-react-native";
import { useTheme } from "native-base";

interface Props extends TouchableOpacityProps {
    icon: React.FC<IconProps>;
}

export function ButtonIcon({ icon: Icon, ...otherProps }: Props) {
    const { colors, sizes } = useTheme();

    return (
        <TouchableOpacity {...otherProps}>
            <Icon color={colors.gray[300]} size={sizes[6]} />
        </TouchableOpacity>
    );
}
