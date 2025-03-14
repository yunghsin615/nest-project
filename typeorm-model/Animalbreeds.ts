import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("animalbreeds", { schema: "mydb" })
export class Animalbreeds {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("enum", { name: "animal_type", enum: ["Cat", "Dog"] })
  animalType: "Cat" | "Dog";

  @Column("varchar", { name: "breed_name", length: 255 })
  breedName: string;

  @Column("mediumtext", { name: "description", nullable: true })
  description: string | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
