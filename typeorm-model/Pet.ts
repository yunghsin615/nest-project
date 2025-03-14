import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pet", { schema: "mydb" })
export class Pet {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("varchar", { name: "breed", nullable: true, length: 50 })
  breed: string | null;

  @Column("enum", { name: "gender", enum: ["M", "F"] })
  gender: "M" | "F";

  @Column("varchar", { name: "color", nullable: true, length: 30 })
  color: string | null;

  @Column("enum", { name: "size", enum: ["Small", "Medium", "Large"] })
  size: "Small" | "Medium" | "Large";

  @Column("decimal", { name: "height", nullable: true, precision: 5, scale: 2 })
  height: string | null;

  @Column("decimal", { name: "weight", nullable: true, precision: 5, scale: 2 })
  weight: string | null;

  @Column("varchar", { name: "temperament", nullable: true, length: 100 })
  temperament: string | null;

  @Column("tinyint", {
    name: "vaccinated",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  vaccinated: boolean | null;

  @Column("date", { name: "birth_date", nullable: true })
  birthDate: string | null;

  @Column("date", { name: "adopted_date", nullable: true })
  adoptedDate: string | null;

  @Column("int", { name: "owner_id", nullable: true })
  ownerId: number | null;
}
