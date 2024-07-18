import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [fname, setFname] = useState('');
    const [mname, setMname] = useState('');
    const [sname, setSname] = useState('');
    const [nameextension, setNameextension] = useState('');
    const [address, setAddress] = useState('');
    const [barangay, setBarangay] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [region, setRegion] = useState('');
    const [municipality, setMunicipality] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [phone, setPhone] = useState('');
    const [datebirth, setDatebirth] = useState('');
    const [placebirth, setPlacebirth] = useState('');
    const [gender, setGender] = useState('');
    const [civilstatus, setCivilstatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodtype, setBloodtype] = useState('');
    /*---------*/ 
    const [fathersurname, setFathersurname] = useState('');
    const [fatherfirstname, setFatherfirstname] = useState('');
    const [fathermiddlename, setFathermiddlename] = useState('');
    const [fatheroccupation, setFatheroccupation] = useState('');
    const [mothersurname, setMothersurname] = useState('');
    const [motherfirstname, setMotherfirstname] = useState('');
    const [mothermiddlename, setMothermiddlename] = useState('');
    const [motheroccupation, setMotheroccupation] = useState('');
    /*----------*/
    const [elementaryname, setElementaryname] = useState('');
    const [secondaryname, setSecondaryname] = useState('');
    const [vocationalname, setVocationalname] = useState('');
    const [collegename, setCollegename] = useState('');

    useEffect(() => {
        if (item) {
            setFname(item.fname);
            setMname(item.mname);
            setSname(item.sname);
            setNameextension(item.nameextension);
            setAddress(item.address);
            setBarangay(item.barangay);
            setZipcode(item.zipcode);
            setRegion(item.region);
            setMunicipality(item.municipality);
            setEmail(item.email);
            setTelephone(item.telephone);
            setPhone(item.phone);
            setDatebirth(item.datebirth);
            setPlacebirth(item.placebirth);
            setGender(item.gender);
            setCivilstatus(item.civilstatus);
            setHeight(item.height);
            setWeight(item.weight);
            setBloodtype(item.bloodtype);
            /*----*/
            setFathersurname(item.fathersurname);
            setFathermiddlename(item.fathermiddlename);
            setFatherfirstname(item.fatherfirstname);
            setFatheroccupation(item.fatheroccupation);
            setMothersurname(item.mothersurname);
            setMothermiddlename(item.mothermiddlename);
            setMotherfirstname(item.motherfirstname);
            setMotheroccupation(item.motheroccupation);
            /*---------------*/
            setElementaryname(item.elementaryname);
            setSecondaryname(item.secondaryname);
            setVocationalname(item.vocationalname);
            setCollegename(item.collegename);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {fname, mname, sname, nameextension, address, barangay, zipcode, region, municipality, email, telephone, phone, datebirth, placebirth, gender, civilstatus, height, weight, bloodtype, fathersurname, fathermiddlename, fatherfirstname, fatheroccupation, mothersurname, mothermiddlename, motherfirstname, motheroccupation, elementaryname, secondaryname, vocationalname, collegename };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
<div class="form-container">
    <form onSubmit={handleSubmit}>
        <div class="form-section">
            <h2>Personal Information</h2>
            <div class="form-group">
                <label for="fname">First Name:</label>
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="mname">Middle Name:</label>
                <input type="text" value={mname} onChange={(e) => setMname(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="sname">Surname:</label>
                <input type="text" value={sname} onChange={(e) => setSname(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="nameextension">Name Extension (JR, SR):</label>
                <input type="text" id="nameextension" value={nameextension} onChange={(e) => setNameextension(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="barangay">Barangay:</label>
                <input type="text" id="barangay" value={barangay} onChange={(e) => setBarangay(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="zipcode">Zipcode:</label>
                <input type="text" id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="region">Region:</label>
                <input type="text" id="region" value={region} onChange={(e) => setRegion(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="municipality">Municipality:</label>
                <input type="text" id="municipality" value={municipality} onChange={(e) => setMunicipality(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="telephone">Telephone:</label>
                <input type="tel" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="datebirth">Date of Birth (mm/dd/yyyy):</label>
                <input type="text" value={datebirth} onChange={(e) => setDatebirth(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="placebirth">Place of Birth:</label>
                <input type="text" id="placebirth" value={placebirth} onChange={(e) => setPlacebirth(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="civilstatus">Civil Status:</label>
                <input type="text" id="civilstatus" value={civilstatus} onChange={(e) => setCivilstatus(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="height">Height:</label>
                <input type="text" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="weight">Weight:</label>
                <input type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="bloodtype">Blood Type:</label>
                <input type="text" id="bloodtype" value={bloodtype} onChange={(e) => setBloodtype(e.target.value)} />
            </div>
        </div>

        <div class="form-section">
            <h2>Family Background</h2>
            <div class="form-group">
                <label for="fathersurname">Father's Surname:</label>
                <input type="text" id="fathersurname" value={fathersurname} onChange={(e) => setFathersurname(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="fathermiddlename">Father's Middle Name:</label>
                <input type="text" id="fathermiddlename" value={fathermiddlename} onChange={(e) => setFathermiddlename(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="fatherfirstname">Father's First Name:</label>
                <input type="text" id="fatherfirstname" value={fatherfirstname} onChange={(e) => setFatherfirstname(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="fatheroccupation">Father's Occupation:</label>
                <input type="text" id="fatheroccupation" value={fatheroccupation} onChange={(e) => setFatheroccupation(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="mothersurname">Mother's Surname:</label>
                <input type="text" id="mothersurname" value={mothersurname} onChange={(e) => setMothersurname(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="mothermiddlename">Mother's Middle Name:</label>
                <input type="text" id="mothermiddlename" value={mothermiddlename} onChange={(e) => setMothermiddlename(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="motherfirstname">Mother's First Name:</label>
                <input type="text" id="motherfirstname" value={motherfirstname} onChange={(e) => setMotherfirstname(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="motheroccupation">Mother's Occupation:</label>
                <input type="text" id="motheroccupation" value={motheroccupation} onChange={(e) => setMotheroccupation(e.target.value)} />
            </div>
        </div>

        <div class="form-section">
            <h2>Academic Background</h2>
            <div class="form-group">
                <label for="elementaryname">Elementary Name:</label>
                <input type="text" id="elementaryname" value={elementaryname} onChange={(e) => setElementaryname(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="secondaryname">Secondary Name:</label>
                <input type="text" id="secondaryname" value={secondaryname} onChange={(e) => setSecondaryname(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="vocationalname">Vocational Name:</label>
                <input type="text" id="vocationalname" value={vocationalname} onChange={(e) => setVocationalname(e.target.value)} />
            </div>
            <div class="form-group">
                <label for="collegename">College Name:</label>
                <input type="text" id="collegename" value={collegename} onChange={(e) => setCollegename(e.target.value)} />
            </div>
        </div>

        <button type="submit" class="submit-button">Submit</button>
    </form>
</div>


    );
};

export default ItemForm;
