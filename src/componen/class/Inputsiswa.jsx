import React from "react";
import { Container, Table, Button, Form, FormGroup, Label, Input, } from 'reactstrap';

const Datasiswas = [
    {
        id: 1,
        nama: "Nanda",
        alamat: " semarang barat",
        Jurusan: "Agama",
        nisn: "123456789",
        beasiswa: "False",
        jenkel: 'L',
    },
    {
        id: 2,
        nama: "Nana",
        alamat: "Jakarta tenggara",
        Jurusan: "Tataboga",
        nisn: "3456789",
        beasiswa: "true",
        jenkel: 'p',
    }
]

class Inputsiswa extends React.Component {

    constructor() {
        super()
        this.state = {
            nama: '',
            alamat: '',
            jenkel: '',
            Jurusan: '',
            beasiswa: false,
            alamat: '',
            namaTombol: 'Simpan'
        }
    }

    handEditButton = (data) => {
        const NewData = Datasiswas.filter(
            i => i.id === data

        )
        console.log(NewData[0]);
        this.setState({
            nama: NewData[0].nama,
            alamat: NewData[0].alamat,
            jenkel: NewData[0].jenkel,
            beasiswa: NewData[0].beasiswa,
            Jurusan: NewData[0].Jurusan,
            id: NewData[0].id,
            namaTombol: "Ubah",

        })
    }

    clearState = () => {
        this.setState({
            nama: '',
            alamat: '',
            jenkel: '',
            beasiswa: false,
            Jurusan: '',
            id: '',
            namaTombol: "Simpan",

        })
    }


    handleSumbitbuttom = () => {
        if (this.state.namaTombol === "Ubah") {
            const result = Datasiswas.findIndex((a) => a.id === this.state.id);

            const newDataSiswas = Datasiswas;
            newDataSiswas.splice(result, 1, this.state);
            this.clearState();
        } else {
            const Siswabaru = this.state;
            Siswabaru.id = Math.floor(Math.random() * 10000);
            if (this.state.nama.trim() === "") {
                alert('maaf Nama Kosong');

            } else {
                Datasiswas.push(Siswabaru);
                this.setState({
                    id: '',
                    nama: '',
                    alamat: '',
                    Jurusan: '',
                    jenkel: '',
                    beasiswa: ''
                })
            }

            console.log(Siswabaru);
        }
    }

    handleDeleteButton = (data) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus siswa ini?")) {
            const newDataSiswas = Datasiswas.filter(
                (siswa) => siswa.id !== data
            );
            Datasiswas.length = 0;
            Datasiswas.push(...newDataSiswas);
            this.clearState();
        }
    };


    render() {
        return (
            <>
                <Container>
                    <h1> Pendaftar </h1>
                    <Table
                        bordered
                        borderless
                        hover
                        responsive
                        size="sm"
                        striped
                    >
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    nama
                                </th>
                                <th>
                                    NISN
                                </th>
                                <th>
                                    alamat
                                </th>
                                <th>
                                    jenis kelamin
                                </th>
                                <th>
                                    Jurusan
                                </th>
                                <th>
                                    Jalur Beasiswa
                                </th>
                                <th>
                                    Aksi
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {Datasiswas.map((siswa, i) => {
                                return (
                                    <tr key={siswa.id}>

                                        <th scope="row">
                                            {i + 1}
                                        </th>
                                        <td>
                                            {siswa.nama}
                                        </td>
                                        <td>
                                            {siswa.nisn}
                                        </td>
                                        <td>
                                            {siswa.alamat}
                                        </td>
                                        <td>
                                            {siswa.jenkel}
                                        </td>
                                        <td>
                                            {siswa.Jurusan}
                                        </td>
                                        <td>
                                            {siswa.beasiswa.toString()}
                                        </td>

                                        <td>
                                            <div>
                                                <Button color="primary"
                                                    onClick={
                                                        () => { this.handEditButton(siswa.id) }}
                                                >
                                                    Ubah

                                                </Button>
                                                <Button color="danger"
                                                    onClick={
                                                        () => { this.handleDeleteButton(siswa.id) }
                                                    }
                                                >
                                                    Hapus
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>


                    <Form>
                        <FormGroup>

                            <Label for="exampleEmail">
                                Nama
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="Tulis nama"
                                placeholder="Tulis Nama"
                                type="name"
                                value={this.state.nama
                                }
                                onChange={(a) => {
                                    return this.setState({ nama: a.target.value })
                                }}

                            />
                        </FormGroup>
                        <FormGroup>

                            <Label for="exampleEmail">
                                NISN
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="Tulis nisn"
                                placeholder="Tulis NISN"
                                type="nisn"
                                value={this.state.nisn
                                }
                                onChange={(a) => {
                                    return this.setState({ nisn: a.target.value })
                                }}

                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                Jurusan
                            </Label>
                            <select
                                id="exampleSelect"
                                name="select"
                                type="select"
                                value={this.state.Jurusan}
                                onChange={(a) => {
                                    return this.setState({ Jurusan: a.target.value })
                                }}

                            >
                                <option>
                                    Informatika
                                </option>
                                <option>
                                    tataboga
                                </option>
                                <option>
                                    Seni dan Budaya
                                </option>
                                <option>
                                    politik
                                </option>
                                <option>
                                    Agama islam
                                </option>
                                <option>
                                    Hukum
                                </option>
                                <option>
                                    Keperawatan
                                </option>
                                <option>
                                    Akuitansi
                                </option>
                                <option>
                                    Kedokteran
                                </option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Alamat
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                                value={this.state.alamat}
                                onChange={(a) => {
                                    return this.setState({ alamat: a.target.value })
                                }}
                            />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend>
                                Jenis Kelamin
                            </legend>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                    checked={this.state.jenkel === 'L'}
                                    value='L'
                                    onChange={(a) => {
                                        return this.setState({ jenkel: a.target.value })
                                    }}
                                />
                                {' '}
                                <Label check>
                                    Laki - Laki
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                    checked={this.state.jenkel === 'P'}
                                    value='P'
                                    onChange={(a) => {
                                        return this.setState({ jenkel: a.target.value })
                                    }}
                                />
                                {' '}
                                <Label check>
                                    Perempuan
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" defaultChecked={this.state.beasiswa === true}
                                    onClick={(a) => {
                                        return this.setState({ beasiswa: a.target.checked })
                                    }} />

                                {' '}
                                <Label check>
                                    Beasiswa
                                </Label>
                            </FormGroup>

                        </FormGroup>

                        <Button
                            onClick={() => this.handleSumbitbuttom()} >
                            Submit
                        </Button>
                    </Form>
                </Container>


            </>
        )
    }

}


export default Inputsiswa;