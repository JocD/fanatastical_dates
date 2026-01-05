import { CardDef } from "@/lib/cards";
import { IMAGE_URLS } from "@/lib/config";
import { cx } from "@/lib/cardUtils";

interface CardTileProps {
    def: CardDef;
    selected?: boolean;
    onSelect?: () => void;
}

export function CardTile({ def, selected, onSelect }: CardTileProps) {
    const img = IMAGE_URLS[def.id];

    return (
        <button
            type="button"
            onClick={onSelect}
            className={cx(
                "group text-left",
                !onSelect && "cursor-default"
            )}
            aria-pressed={selected}
        >
            <div
                className={cx(
                    "relative overflow-hidden rounded-2xl transition-all",
                    selected
                        ? "ring-2 ring-amber-700"
                        : "ring-2 ring-transparent hover:ring-amber-700"
                )}
            >
                <img
                    src={img}
                    alt={def.title}
                    className="w-full h-auto block"
                />
            </div>
        </button>
    );
}
