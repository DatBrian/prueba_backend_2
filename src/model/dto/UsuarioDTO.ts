import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

class UsuarioDTO {
    @Expose({ name: 'usu_nombre' })
    @IsString()
    public name: string;

    @Expose({ name: 'usu_segdo_nombre' })
    @IsString()
    public secondName: string;

    @Expose({ name: 'usu_primer_apellido_usuar' })
    @IsString()
    public lastName: string;

    @Expose({ name: 'usu_segdo_apellido_usuar' })
    @IsString()
    public secondLastName: string;

    @Expose({ name: 'usu_telefono' })
    @IsString()
    public phone: string;

    @Expose({ name: 'usu_direccion' })
    @IsString()
    public address: string;

    @Expose({ name: 'usu_email' })
    @IsString()
    public mail: string;

    @Expose({ name: 'usu_tipodoc' })
    @IsString()
    public doc: string;

    @Expose({ name: 'genero' })
    @IsString()
    public genero: string;

    @Expose({ name: 'usu_acudiente' })
    @IsString()
    public acudiente: string;

    constructor(
        usu_nombre: string,
        usu_segdo_nombre: string,
        usu_primer_apellido_usuar: string,
        usu_segdo_apellido_usuar: string,
        usu_telefono: string,
        usu_direccion: string,
        usu_email: string,
        usu_tipodoc: string,
        genero: string,
        usu_acudiente: string
    ) {
        this.name = usu_nombre;
        this.secondName = usu_segdo_nombre;
        this.lastName = usu_primer_apellido_usuar;
        this.secondLastName = usu_segdo_apellido_usuar;
        this.phone = usu_telefono;
        this.address = usu_direccion;
        this.mail = usu_email;
        this.doc = usu_tipodoc;
        this.genero = genero;
        this.acudiente = usu_acudiente;
    }
}

export default UsuarioDTO;