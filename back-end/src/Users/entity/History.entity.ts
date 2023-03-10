import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class MatchHistory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', { array: true, default: [] })
    scores: number[];

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @ManyToOne(() => User)
    @JoinColumn()
    winner: User;

    @ManyToOne(() => User)
    @JoinColumn()
    looser: User;
}
