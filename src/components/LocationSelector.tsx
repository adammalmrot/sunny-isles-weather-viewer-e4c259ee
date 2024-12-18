import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const locations = [
  { id: "male", name: "Malé" },
  { id: "addu", name: "Addu City" },
  { id: "maafushi", name: "Maafushi" },
  { id: "fuvahmulah", name: "Fuvahmulah" },
];

export const LocationSelector = ({
  onLocationChange,
}: {
  onLocationChange: (location: string) => void;
}) => {
  return (
    <div className="w-full max-w-xs animate-fade-in">
      <Select onValueChange={onLocationChange}>
        <SelectTrigger className="w-full backdrop-blur-sm bg-white/80">
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          {locations.map((location) => (
            <SelectItem key={location.id} value={location.id}>
              {location.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};