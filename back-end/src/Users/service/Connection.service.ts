import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Connection } from "../entity/Connection.entity";
import { User } from "../entity/User.entity";

@Injectable()
export class ConnectionService {
    constructor(
        @InjectRepository(Connection)
        private readonly connectionRepository: Repository<Connection>
    ) {}

    async getConnectionByUserId(userId: number): Promise<Connection> {
        const user:Connection = await this.connectionRepository.findOne({ relations: ["user"], where : { user: {id: userId} } });
        if (!user)
            throw new Error("Connection does not exist");
        return user;
    }

    async getConnectionById42(id: number): Promise<Connection> {
        const user:Connection = await this.connectionRepository.findOne({relations: ["user"],  where : { id42: id } });
        if (!user)
            throw new Error("Connection does not exist");
        return user;
    }

    async getConnectionById(id: number): Promise<Connection> {
        const user:Connection = await this.connectionRepository.findOne({ where : { id: id } });
        if (!user)
            throw new Error("Connection does not exist");
        return user;
    }

    async createConnection(connection: Connection): Promise<Connection> {
        return this.connectionRepository.save(connection);
    }

    async updateConnection(id: number, secret = null): Promise<Connection> {
        let connection = await this.getConnectionByUserId(id);
        if (!connection) {
            throw new Error("Connection does not exist");
        }
        connection.otp = secret;
        return await this.connectionRepository.save(connection);
    }

}
