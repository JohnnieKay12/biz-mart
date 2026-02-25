import { cn } from "@/lib/utils";

interface Props {
    amount: number | undefined;
    className?: string;
}

const PriceFormatter = ({ amount = 0, className }: Props) => {
    const formattedPrice = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0, // removes .00
    }).format(amount);

    return (
        <span
            className={cn("text-sm font-semibold text-darkColor", className)}
        >
            {formattedPrice}
        </span>
    );
};

export default PriceFormatter;










// import { cn } from "@/lib/utils";

// interface Props {
//     amount: number | undefined;
//     className?: string;
// }

// const PriceFormatter = ({ amount, className }: Props) => {
//     const formattedPrice = new Number(amount).toLocaleString("en-US", {
//         currency: "USD",
//         style: "currency",
//         minimumFractionDigits: 2,
//     });
//     return (
//         <span
//             className={cn("text-sm font-semibold text-darkColor", className)}
//         >
//             {formattedPrice}
//         </span>
//     );
// };

// export default PriceFormatter;
